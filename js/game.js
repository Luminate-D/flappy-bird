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

    blocks.forEach(block => {
        block.update();
        block.render();

        if(block.collided()) player.die();
    });

    player.update();
    player.render();
}, 1000 / 60);

document.addEventListener('keydown', async (event) => {
    if(event.key == ' ') {
        player.flap();
    }
});