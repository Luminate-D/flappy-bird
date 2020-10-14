const GRAVITY = 0.5;
const SPEED = 2;

let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');

canvas.width = 300;
canvas.height = 500;

let blocks = [];
let player = new Player(canvas.width / 2, canvas.height / 2);

setInterval(() => {
    let ground = new Block(true);
    let top = new Block(false, ground);

    blocks.push(ground, top);
}, 2000);

setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#2ec4f2';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    blocks.forEach(block => {
        block.update();
        block.render();

        if(block.collided()) player.die();
    });

    player.update();
    player.render();

    if(player.died) {
        ctx.fillStyle = 'red';
        ctx.font = 'bold 24px Verdana';
        return ctx.fillText('Game over!', canvas.width - 220, canvas.height / 2);
    }

    ctx.fillStyle = 'red';
    ctx.font = 'bold 24px Verdana';
    ctx.fillText(player.score, canvas.width / 2, 50);
}, 1000 / 60);

document.addEventListener('keydown', async (event) => {
    if(event.key == ' ') {
        player.flap();
    }
});