const movable = document.getElementById('movable')
const movable2 = document.getElementById('movable2')
const target = document.getElementById('target')
const target1 = document.getElementById('targetWall')
let mposx = 0
let mposy = 0
let m2posx = 0
let m2posy = 0
const movimento = 10


console.log(movable)



document.addEventListener('keydown', (event) => {

    console.log(event.key)

    if (event.key === 'w') {
        m2posy -= movimento
        if (m2posy < 0) {
            m2posy = 0
        }
    } else if (event.key === 's') {
        m2posy += movimento
        if (m2posy > 372) {
            m2posy = 372
        }
    } else if (event.key === 'a') {
        m2posx -= movimento
        if (m2posx < 0) {
            m2posx = 0
        }
    } else if (event.key === 'd') {
        m2posx += movimento
        if (m2posx > 0) {
            m2posx = 0  
        }
    }else if (event.key === 'ArrowUp') {
        mposy -= movimento
        if (mposy < 0) {
            mposy = 0
        }
    } else if (event.key === 'ArrowDown') {
        mposy += movimento
        if (mposy > 372) {
            mposy = 372
        }
    } else if (event.key === 'ArrowLeft') {
        mposx -= movimento
        if (mposx < 0) {
            mposx = 0
        }
    } else if (event.key === 'ArrowRight') {
        mposx += movimento
        if (mposx > 0) {
            mposx = 0  
        }
    }

    movable2.style.top = m2posy + 'px'
    
    movable2.style.left = m2posx + 'px'
    
    movable.style.top = mposy + 'px'
    movable.style.left = mposx + 'px'

});

    
    const movableRect2 = movable2.getBoundingClientRect()
    let targetRect = target.getBoundingClientRect()
    
    const movableRect = movable.getBoundingClientRect()
    targetRect = target.getBoundingClientRect()
    
    if (
        movableRect2.left < targetRect.right &&
        movableRect2.right > targetRect.left &&
        movableRect2.top < targetRect.bottom &&
        movableRect2.bottom > targetRect.top
    ) {
        alert("Olá")
    }


    if (
        movableRect.left < targetRect.right &&
        movableRect.right > targetRect.left &&
        movableRect.top < targetRect.bottom &&
        movableRect.bottom > targetRect.top
    ) {
        alert("Olá")
    }

